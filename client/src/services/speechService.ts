// Browser Speech Capabilities Service
// Handles Text-to-Speech (Synthesis) & Speech-to-Text (Recognition & MediaRecorder)

export interface SpeechRecognitionResult {
  transcript: string;
  isFinal: boolean;
}

class SpeechService {
  private synth: SpeechSynthesis | null = null;
  private voices: SpeechSynthesisVoice[] = [];
  private recognition: any = null;
  private mediaRecorder: MediaRecorder | null = null;
  private audioChunks: Blob[] = [];

  constructor() {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      this.synth = window.speechSynthesis;
      this.loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = () => this.loadVoices();
      }
    }
  }

  private loadVoices() {
    if (this.synth) {
      this.voices = this.synth.getVoices();
    }
  }

  // Text-to-Speech: Native Pronunciation Readout
  public speak(text: string, rate: number = 0.95, lang: string = 'en-US'): Promise<void> {
    return new Promise((resolve) => {
      if (!this.synth) {
        console.warn('SpeechSynthesis is not supported in this browser.');
        return resolve();
      }

      this.synth.cancel(); // Stop any ongoing speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = rate;
      utterance.pitch = 1.0;

      // Select a natural English voice
      const preferredVoice = this.voices.find(
        v => (v.lang.startsWith('en') || v.lang === lang) && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Samantha'))
      ) || this.voices.find(v => v.lang.startsWith('en'));

      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      this.synth.speak(utterance);
    });
  }

  public stopSpeaking(): void {
    if (this.synth) {
      this.synth.cancel();
    }
  }

  // Check Speech Recognition capability
  public isRecognitionSupported(): boolean {
    if (typeof window === 'undefined') return false;
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  }

  // Speech-to-Text: Continuous recognition for speaking studio & AI tutor
  public startListening(
    onResult: (transcript: string, isFinal: boolean) => void,
    onError: (err: string) => void
  ): boolean {
    if (!this.isRecognitionSupported()) {
      onError('Speech recognition is not supported in this browser. Please use Chrome, Edge, or Safari.');
      return false;
    }

    try {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      this.recognition = new SpeechRecognition();
      this.recognition.continuous = true;
      this.recognition.interimResults = true;
      this.recognition.lang = 'en-US';

      this.recognition.onresult = (event: any) => {
        let interim = '';
        let final = '';

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }

        onResult(final || interim, Boolean(final));
      };

      this.recognition.onerror = (event: any) => {
        console.warn('Speech recognition error event:', event.error);
        if (event.error !== 'no-speech') {
          onError(`Speech recognition notice: ${event.error}`);
        }
      };

      this.recognition.start();
      return true;
    } catch (err: any) {
      onError(`Unable to initiate microphone: ${err.message}`);
      return false;
    }
  }

  public stopListening(): void {
    if (this.recognition) {
      try {
        this.recognition.stop();
      } catch (e) {
        // Ignored
      }
      this.recognition = null;
    }
  }

  // Voice Recording & Playback via MediaRecorder
  public async startRecording(): Promise<boolean> {
    try {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        return false;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.audioChunks = [];
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.audioChunks.push(event.data);
        }
      };
      this.mediaRecorder.start();
      return true;
    } catch (err) {
      console.warn('Microphone recording error:', err);
      return false;
    }
  }

  public stopRecording(): Promise<string | null> {
    return new Promise((resolve) => {
      if (!this.mediaRecorder) {
        return resolve(null);
      }

      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        // Stop all tracks to release mic icon
        this.mediaRecorder?.stream.getTracks().forEach(track => track.stop());
        resolve(audioUrl);
      };

      this.mediaRecorder.stop();
    });
  }
}

export const speechService = new SpeechService();


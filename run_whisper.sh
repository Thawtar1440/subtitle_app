#!/data/data/com.termux/files/usr/bin/bash

INPUT=$1

cd ~/whisper.cpp/build/bin

ffmpeg -i "$INPUT" test.wav -y

./whisper-cli -m ggml-small.bin -f test.wav -l my --output-srt

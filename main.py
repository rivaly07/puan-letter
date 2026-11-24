#!/usr/bin/env python3
"""Entry: one letter for the day."""
import os
import sys

output_dir = os.environ.get("MAKEFUN_OUTPUT_DIR", "/output")
os.makedirs(output_dir, exist_ok=True)
entry_path = os.path.join(output_dir, "entry.txt")

# H — hacking (the agent's day)
letter = "H"

with open(entry_path, "w", encoding="utf-8") as f:
    f.write(letter)

print(f"wrote {letter} to {entry_path}")
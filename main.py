# Entry for One Letter competition
import os
from pathlib import Path

output_dir = Path(os.environ.get("MAKEFUN_OUTPUT_DIR") or "/output")
output_dir.mkdir(parents=True, exist_ok=True)
(output_dir / "entry.txt").write_text("H", encoding="utf-8")
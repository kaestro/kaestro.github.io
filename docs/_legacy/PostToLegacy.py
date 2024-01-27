import os

# 현재 스크립트의 위치를 기반으로 _posts 디렉토리의 절대 경로를 구합니다.
script_dir = os.path.dirname(os.path.abspath(__file__))
posts_dir = os.path.join(script_dir, "..", "_posts")

# _posts 디렉토리의 모든 .md 또는 .markdown 파일을 순회합니다.
for filename in os.listdir(posts_dir):
    if filename.endswith(".md") or filename.endswith(".markdown"):
        with open(os.path.join(posts_dir, filename), 'r+', encoding='utf-8') as file:
            lines = file.readlines()
            start, end = -1, -1
            for i, line in enumerate(lines):
                if line.strip() == "---":
                    if start == -1:
                        start = i
                    else:
                        end = i
                        break
            if start != -1 and end != -1:
                # Remove existing categories line
                lines = [line for line in lines if not line.strip().startswith("categories:")]
                # Insert new categories line
                lines.insert(end - 1, 'categories: Legacy\n')
                file.seek(0)
                file.writelines(lines)
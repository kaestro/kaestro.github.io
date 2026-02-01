#!/bin/bash
NEW_POST_PATH=$1

# 1. 기존 recommended 포스트 정보 추출
EXISTING_RECOMMENDED=$(ruby scripts/extract_recommended.rb)

# 2. 새 포스트 내용 읽기
NEW_POST_CONTENT=$(cat "$NEW_POST_PATH")
NEW_POST_TITLE=$(grep "^title:" "$NEW_POST_PATH" | sed 's/title: *//g' | tr -d '"')
NEW_POST_CATEGORY=$(grep "^categories:" "$NEW_POST_PATH" | sed 's/categories: *//g' | tr -d '"')

# 3. 템플릿에서 프롬프트 생성
PROMPT_FILE="scripts/analyze_recommended_prompt.md"
TEMP_PROMPT="/tmp/analyze_recommended_${RANDOM}.md"

# 템플릿 복사 후 변수 치환
cp "$PROMPT_FILE" "$TEMP_PROMPT"

# 멀티라인 치환을 위해 Perl 사용
perl -i -pe "s/\{\{EXISTING_RECOMMENDED\}\}/$(echo "$EXISTING_RECOMMENDED" | sed 's/\\/\\\\/g' | sed ':a;N;$!ba;s/\n/\\n/g')/g" "$TEMP_PROMPT"
perl -i -pe "s/\{\{NEW_POST_TITLE\}\}/$NEW_POST_TITLE/g" "$TEMP_PROMPT"
perl -i -pe "s/\{\{NEW_POST_CATEGORY\}\}/$NEW_POST_CATEGORY/g" "$TEMP_PROMPT"
perl -i -pe "s|\{\{NEW_POST_PATH\}\}|$NEW_POST_PATH|g" "$TEMP_PROMPT"
perl -i -pe "s/\{\{NEW_POST_CONTENT\}\}/$(echo "$NEW_POST_CONTENT" | sed 's/\\/\\\\/g' | sed ':a;N;$!ba;s/\n/\\n/g')/g" "$TEMP_PROMPT"

# 4. Claude CLI 실행
echo ""
echo "🤖 AI 분석 결과:"
echo "─────────────────────────────────────────────"
claude -p "$(cat "$TEMP_PROMPT")"

# 5. 임시 파일 정리
rm "$TEMP_PROMPT"

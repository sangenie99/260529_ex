# Cozy Daily Memo

Cozy Daily Memo는 브라우저에서 바로 사용할 수 있는 가벼운 메모 웹사이트입니다.  
메인 화면과 메모 화면이 서로 연결되어 있고, 메모는 `localStorage`에 저장됩니다.

## Features

- 메인 화면과 메모 화면 간 이동
- 메모 작성, 목록 확인, 개별 삭제
- 전체 메모 삭제
- 새로고침 후에도 메모 유지
- 모바일과 데스크톱을 모두 고려한 반응형 레이아웃

## File Structure

- `index.html`: 메인 진입 화면
- `memo.html`: 메모 작성 및 목록 화면
- `script.js`: 메모 저장, 불러오기, 삭제 로직
- `style.css`: 공통 스타일과 주요 레이아웃
- `style1.css`: 보조 스타일과 빈 상태 UI
- `AGENTS.md`: 작업 규칙과 에이전트 지침
- `DESIGN.md`: Stitch 디자인 시스템 참고 문서
- `stitch_exports/`: Stitch에서 내려받은 화면 HTML과 이미지

## How It Works

- 사용자가 `memo.html`에서 메모를 입력하면 `localStorage`의 `cozy-daily-memos` 키에 저장됩니다.
- 저장된 메모는 페이지 로드 시 자동으로 다시 그려집니다.
- 각 메모는 개별 삭제할 수 있고, 전체 삭제 버튼으로 모두 지울 수 있습니다.
- `index.html`에서 `memo.html`로 이동할 수 있고, `memo.html`에서도 다시 메인으로 돌아갈 수 있습니다.

## Run Locally

이 프로젝트는 별도 빌드 없이 정적 파일로 동작합니다.

1. 프로젝트 폴더에서 `index.html`을 브라우저로 엽니다.
2. 메모 화면으로 이동해 메모를 작성합니다.
3. 브라우저를 새로고침해도 작성한 메모가 유지되는지 확인합니다.

로컬 서버가 필요하면 아래처럼 실행할 수 있습니다.

```bash
python3 -m http.server 8000
```

그 다음 `http://localhost:8000`으로 접속합니다.

## Design Reference

이 UI는 Stitch 프로젝트 **Cozy Daily Memo**를 참고해 구성했습니다.

- Project ID: `10818034205600650560`
- Main Screen: `bddf67612a704e5595eed3bc210df869`
- Design System: `asset-stub-assets-fc4aafcf914e4f08864053f53cb9a0e9-1780041459015`

## Notes

- 메모 데이터는 브라우저 저장소에만 남습니다.
- 브라우저 데이터를 삭제하면 메모도 함께 삭제됩니다.
- 현재 구조는 백엔드 없이 동작하는 프론트엔드 중심 구현입니다.

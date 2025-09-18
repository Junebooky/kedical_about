# Kedical About Us - Landing Page Clone

한국 의료 관광 플랫폼인 Kedical의 랜딩 페이지를 클론한 프로젝트입니다.

## 기술 스택

- React
- TypeScript
- Tailwind CSS v3
- Embla Carousel
- Lucide React (아이콘)

## 주요 기능

- 반응형 디자인
- 무한 루프 캐러셀
- Embla 캐러셀을 활용한 리뷰 섹션
- 탭 인터페이스 (Concierge Service)
- 아코디언 FAQ 섹션
- 부드러운 애니메이션 효과

## 프로젝트 구조

```
src/
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── Logo.tsx
│   │   └── AppDownloadButtons.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── KoreaBeauty.tsx
│       ├── AppIntro.tsx
│       ├── Reviews.tsx
│       ├── EasyInquiry.tsx
│       ├── AdvanceBooking.tsx
│       ├── PaymentSystem.tsx
│       ├── BookingProcess.tsx
│       ├── PartnerHospitals.tsx
│       ├── ConciergeService.tsx
│       ├── Promotions.tsx
│       ├── News.tsx
│       └── FAQ.tsx
├── types/
│   └── index.ts
├── App.tsx
└── index.css
```

## 시작하기

1. 프로젝트 클론
```bash
git clone [repository-url]
cd kedical_about_us
```

2. 의존성 설치
```bash
npm install
```

3. 개발 서버 시작
```bash
npm start
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

## 빌드

```bash
npm run build
```

## 특징

- **Hero 섹션**: z-index를 활용한 스마트폰 이미지 레이어링
- **무한 루프 캐러셀**: CSS 애니메이션을 활용한 부드러운 무한 스크롤
- **Embla 캐러셀**: 터치 지원 및 반응형 리뷰 슬라이더
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 화면 크기 지원
- **타이포그래피 시스템**: Pretendard 폰트를 활용한 일관된 텍스트 스타일

## 참고사항

- 실제 웹사이트의 이미지들은 placeholder로 대체되었습니다
- 일부 인터랙티브 기능은 UI만 구현되어 있습니다
- 실제 서비스 연동을 위해서는 백엔드 API 연결이 필요합니다
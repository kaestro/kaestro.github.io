/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // 파일 시스템 감시 문제 해결을 위한 설정
      config.watchOptions = {
        poll: 1000,   // 1초마다 파일 변경 감지
        aggregateTimeout: 300, // 변경 후 300ms 대기
      };
    }
    return config;
  },
  output: 'export',  // 정적 사이트 생성을 위한 설정 추가
};

export default nextConfig;

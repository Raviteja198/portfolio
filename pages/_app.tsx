import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Raviteja Musku | Cybersecurity Analyst | Application Security</title>
        <meta name="description" content="Raviteja Musku is an aspiring Cybersecurity Analyst and Application Security enthusiast with a full-stack development background, specializing in authentication, RBAC, OWASP security testing, Python, JavaScript, Next.js, Django, and application security." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <meta property="og:title" content="Raviteja Musku | Cybersecurity Analyst" />
        <meta property="og:description" content="Cybersecurity-focused developer with full-stack experience. OWASP, ZAP, Burp Suite, authentication, RBAC." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

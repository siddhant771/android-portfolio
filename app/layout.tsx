import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Siddhant Pathak | Android & Java Backend Engineer',description:'Siddhant Pathak — Android developer and Java backend engineer. Kotlin, Jetpack Compose, Java, Spring Boot, API Gateway and production-minded projects.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}

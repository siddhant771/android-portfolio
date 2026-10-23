import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'Siddhant Pathak | Android Developer',description:'Siddhant Pathak — Android developer, Kotlin and Jetpack Compose engineer. Explore shipped apps, projects and engineering work.'};
export default function RootLayout({children}:{children:React.ReactNode}) {return <html lang="en"><body>{children}</body></html>}

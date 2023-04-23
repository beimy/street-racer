import Link from 'next/link'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
                <nav>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="media">
                        Media
                    </Link>
                    <Link href="merch">
                        Merch
                    </Link>
                    <Link href="shows">
                        Shows
                    </Link>
                </nav>
                {children}
        </html>
    )
}
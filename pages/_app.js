function MyApp({ Component, pageProps }) {
    return (
        <>
        <Component {...pageProps} />

        <style jsx global>{`
                body {
                    background-color: #f7f5f1;
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", sans-serif; 
                }
            `}</style>
        </>
    )
 
}
  
export default MyApp
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
})

const commonLayout = (page) => {
    return (
        <>
            {/* 通用头部 */}
            {page}
            {/* 通用底部 */}
        </>
    )
}

export default function App({ Component, pageProps }) {

    const mainContentJsx = (
        <>
            <main className="main">
                <div className="contentContainer">
                    <div className="centerView">
                        <Component {...pageProps} />
                    </div>
                </div>
            </main>
        </>
    )


    return (
        <ThemeProvider theme={theme}>
            {Component.getLayout
                ? Component.getLayout(mainContentJsx)
                : commonLayout(mainContentJsx)}
        </ThemeProvider>
    )
}

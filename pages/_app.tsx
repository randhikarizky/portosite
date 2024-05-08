import { AppProps } from "next/app";
import ThemeConfig from "@/assets/theme";
import GlobalStyles from "@/assets/theme/globalStyles";
import { AppBar, Toolbar, alpha, styled, useTheme } from "@mui/material";
import Layout from "@/app/global/components/Layouts/Layout";
import ScrollTop from "@/app/global/components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import useResponsive from "@/app/global/hooks/useResponsive";

import "@/assets/css/global.css";
type CustomAppProps = AppProps & {
  pageProps: any;
};

const App = ({ Component, pageProps }: CustomAppProps) => {
  const isDesktop = useResponsive({ query: "up", start: "md" });

  return (
    <>
      <ThemeConfig>
        <Layout>
          <GlobalStyles />
          <ScrollTop />
          <Toolbar
            id="back-to-top-anchor"
            sx={{ position: "absolute", top: "0" }}
          />
          {isDesktop && (
            <AnimatedCursor
              innerSize={8}
              outerSize={100}
              color="15, 163, 177"
              outerAlpha={0.1}
              innerScale={0.85}
              outerScale={2}
              clickables={["a", ".link-grid", ".scroll-top"]}
            />
          )}
          <Component {...pageProps} />
        </Layout>
        {/* <Footer
            position="static"
            sx={{ top: 'auto', bottom: 0, padding: '.5rem' }}
          >
            <Typography variant="subtitle2" align="center">
              © 2023 Dear Allah Project · Created by{' '}
              <Link
                href="https://www.linkedin.com/in/randhikar"
                color="inherit"
                target="_blank"
                underline="hover"
              >
                Randhika Rizkyaldi
              </Link>
            </Typography>
          </Footer> */}
      </ThemeConfig>
    </>
  );
};

export default App;

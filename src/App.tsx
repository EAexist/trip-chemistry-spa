/* React Packages */
import { Navigate, Outlet, Route, RouterProvider, ScrollRestoration, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material';
import { Menu } from '@mui/icons-material';

/* App */
import './index.css';
import { TEST } from './common/app-const';
import CityDetailContent from './content/CityDetailContent';
import { store } from './store';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { AppBarContextProvider } from './contexts/AppBarContext';
import GlobalStyles from './components/GlobalStyles';
import Page from './content/Page';
import ResultContent from './content/ResultContent';
import ChemistryContent from './content/chemistry/ChemistryContent';
import AddFriendContent from './content/chemistry/AddFriendContent';
import ChemistryResultContent from './content/chemistry/ChemistryResultContent';
import { theme } from './theme';
import HomeContent from './content/home/HomeContent';
import TestContent from './content/test/TestContent';
import LoginContent from './content/LoginContent';
import AuthRequiredContent from './content/AuthRequiredContent';
import TestRequiredContent from './content/TestRequiredContent';

function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/*'} element={<Page />}>
                    <Route key={'index'} index element={<Navigate to={'login/oauth2/code/kakao'} replace />} />
                    <Route key={'home'} path={'home'} element={<HomeContent />} />
                    {/* <Route key={'auth'} path={'auth'} element={<AuthContent />} /> */}
                    <Route key={'login'} path={'login/oauth2/code/kakao'} element={<LoginContent />} />
                    <Route key={'authRequired'} element={<AuthRequiredContent />}>
                        <Route key={'test'} path={'test'} element={
                            <>
                                <Outlet />
                                {/* https://reactrouter.com/en/main/components/scroll-restoration */}
                                <ScrollRestoration getKey={(location, matches) => {
                                    const paths = ["/test"];
                                    console.log(`[ScrollRestoration] ${location.pathname}`)
                                    return paths.includes(location.pathname)
                                        ? // restore by pathname
                                        location.pathname
                                        : // everything else by location like the browser
                                        location.key;
                                }} />
                            </>
                        }>
                            <Route key={'answer'} path={''} element={<TestContent />} />
                        </Route>
                        <Route key={'testRequired'} element={<TestRequiredContent />}>
                            <Route key={'result'} path={'result'} element={<ResultContent />} />
                            <Route key={'chemistry'} path={'chemistry'} element={<Outlet />} >
                                <Route key={'index'} path={''} element={<ChemistryContent />} >
                                    <Route path={'result'} element={<ChemistryResultContent />} />
                                </Route>
                                <Route key={'addFriend'} path={'addFriend'} element={<AddFriendContent />} />
                            </Route>
                            <Route key={'city'} path={'city'} element={<Outlet />} >
                                {
                                    Object.keys(TEST.city.subTests).map((cityClass) => (
                                        <Route key={cityClass} path={cityClass} element={<CityDetailContent cityClass={cityClass as keyof typeof TEST.city.subTests} />} />
                                    ))
                                }
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </>
        )
    );
    
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <AppBarContextProvider>
                    <AnimatePresence>
                        <RouterProvider router={router} />
                    </AnimatePresence>
                    {/* </Content> */}
                </AppBarContextProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default App;

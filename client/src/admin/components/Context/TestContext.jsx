import {createContext, useContext} from "react";

const ThemeContext = createContext(null);

const TestContext = () => {
    return (
        <ThemeContext.Provider value="dark">
            <Form />
        </ThemeContext.Provider>
    );
}

const Form = () => {
    return (
        <Panel title="Welcome">
            <Button>Sign In</Button>
            <Button>Sign up</Button>
        </Panel>
    );
}

const Panel = ({title, children}) => {
    console.log(children);
    const theme = useContext(ThemeContext);
    const className = `panel-${theme}`;
    return (
        <section className={className}>
            <h1>{title} </h1>
            {children}
        </section>
    );
}

const Button = ({children}) => {
    const theme = useContext(ThemeContext);
    const className = `btn-${theme}`;
    return (
        <button className={className}>
            {children}
        </button>
    );
}


export default TestContext;
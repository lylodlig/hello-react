import React, {Component} from 'react';

class Title extends React.Component {

    constructor(props) {
        super(props)

        let test = new Test();
        test.testMethod()

        const testMethod = test.testMethod
        testMethod()//undefine
    }

    click(e) {
        e.preventDefault()
        // return false
        console.log("click")
    }

    render() {
        return (
            <div>
                <h1 onClick={this.click.bind(this)}>Title</h1>
            </div>
        )
    }
}

class Test {
    testMethod() {
        console.log(this)
    }
}

export function APP() {
    return (<div>
        <Title/>
    </div>)
}

export default APP
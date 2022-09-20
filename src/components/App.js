import React from 'react';
import '../style/calculator.css';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { display: '0', operation: '', val1: '', result: '' };
    }

    Equation = (e, element) => {
        e.preventDefault();

        if (element !== 'C' && element !== '+-' && element !== '%' && element !== '/' && element !== '+' && element !== '-' && element !== '=' && element !== 'X') {
            if (this.state.result !== '') {
                if (element === '.') {
                    this.setState({ result: '', display: `0${element}` });
                }
                this.setState({ result: '', display: element });
                return;
            }
            let digit = this.state.display;
            if (digit === '0') {
                digit = '';
            }
            if (element === '.') {
                const indexDot = digit.indexOf('.');
                if (indexDot > 0) {
                    digit = digit.replace('.', '');
                }
            }
            this.setState({ display: digit + element });
        } else {
            if (element === 'C') {
                this.setState({ display: '', operation: '', val1: '', result: '' });
                return;
            }
            if (element !== '=' && element !== '+-') {
                this.setState({ display: '', operation: element, val1: this.state.display, result: '' });
                return;
            }
            if (element === '+-') {
                this.setState({ display: `-${this.state.display}` });
            }
            if (element === '=') {
                const val1 = parseFloat(this.state.val1);
                const val2 = parseFloat(this.state.display);
                let result = 0;
                console.log(val1);
                console.log(val2);

                if (this.state.operation === 'X') { result = val1 * val2; }
                if (this.state.operation === '/') { result = val1 / val2; }
                if (this.state.operation === '+') { result = val1 + val2; }
                if (this.state.operation === '-') { result = val1 - val2; }
                if (this.state.operation === '%') { result = (val2 * val1) / 100; }

                console.log(result);
                this.setState({ display: result, operation: '', element: '', element2: '', result });
            }
        }
    }

    render() {
        return (
            <div>
                <div id="calculator">
                    <input id="calculator-display" readOnly value={this.state.display} />
                    <div className="calculator-row">
                        <a className="calculator-button" onClick={e => this.Equation(e, 'C')}>C</a>
                        <a className="calculator-button" onClick={e => this.Equation(e, '+-')}>+/-</a>
                        <a className="calculator-button" onClick={e => this.Equation(e, '%')}>%</a>
                        <a className="calculator-button orange" onClick={e => this.Equation(e, '/')}>÷</a>
                    </div>
                    <div className="calculator-row">
                        <a className="calculator-button number" onClick={e => this.Equation(e, '7')}>7</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '8')}>8</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '9')}>9</a>
                        <a className="calculator-button orange" onClick={e => this.Equation(e, 'X')}>X</a>
                    </div>
                    <div className="calculator-row">
                        <a className="calculator-button number" onClick={e => this.Equation(e, '4')}>4</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '5')}>5</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '6')}>6</a>
                        <a className="calculator-button orange" onClick={e => this.Equation(e, '-')}>-</a>
                    </div>
                    <div className="calculator-row">
                        <a className="calculator-button number" onClick={e => this.Equation(e, '1')}>1</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '2')}>2</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '3')}>3</a>
                        <a className="calculator-button orange" onClick={e => this.Equation(e, '+')}>+</a>
                    </div>
                    <div className="calculator-row">
                        <a className="calculator-button number" style={{ width: '118px' }} onClick={e => this.Equation(e, '0')}>0</a>
                        <a className="calculator-button number" onClick={e => this.Equation(e, '.')}>,</a>
                        <a className="calculator-button orange" onClick={e => this.Equation(e, '=')}>=</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

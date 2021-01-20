import React, { Component } from 'react';

class Palindrome extends Component{
    constructor(props){
        super(props)
        
        this.check = this.check.bind(this)
    }
    check(){
        var word = this.kataInput.value;
        const palindrome = (inStr) => {
            inStr = inStr.replace(/\W/g,);
            inStr = inStr.toLowerCase();
            console.log(inStr);
            for (let i=0; i<inStr.length;i+=1){
                if(inStr[i] !== inStr[inStr.length - 1 - i]){
                    this.messageH1.innerText = `${word} is not a palindrome`
                }
                else{
                    this.messageH1.innerText = `${word} is a palindrome`
                }
            }
            
        }
        palindrome(word);
    }
    
    render(){
        return (
            <div>
                <input ref={(ip) => this.kataInput = ip} type="text" placeholder="word"></input>
                <button type="button" onClick={this.check}>Check</button>
                <h1 ref={(h) => this.messageH1 = h}></h1>
            </div>
        );
    }
}

export default Palindrome;
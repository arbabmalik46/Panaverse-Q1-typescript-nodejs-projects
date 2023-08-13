class Questions
{
    question:string='';
    answer:string='';
    choice1:string='';
    choice2:string='';
    choice3:string='';
    correctChoice=0;
    marks:number=0;
    constructor(question:string,answer:string) {
        this.question = question
        this.answer = answer
        }
        getQuestion(){return  this.question;}
        setAnswer (ans:string){this.answer= ans};
        getAnswer() : string { return   this.answer };
        setMarks (){}
        getMarks(): number {
            return 0
        }
        setCorrectChoice(){}
        getCorrectChoice (): number {return 0};
        addMark (){
            if((this.correctChoice==1)){
                console.log("marks added")
            }
            }
            removeMark(){
                //console.log('removed')
                }
}

export default Questions;
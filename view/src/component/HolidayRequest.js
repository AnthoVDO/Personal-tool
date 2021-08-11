import React, {useState, useEffect} from 'react';

const HolidayRequest = () => {


    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState("--start date--");
    const [endDate, setEndDate] = useState("--end date--")
    const [totalDay, setTotalDay] = useState(0);
    const [backToWorkDay, setBackToWorkDay] = useState("--BTW day--");

    const fillName = (e) => {
        setName(e.target.value);
    }

    const fillStartDate = (e) => {
        setStartDate(e.target.value);
        
    }

    const fillEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const fillBTW = (e) => {
        setBackToWorkDay(e.target.value);
    }

    useEffect(() => {
        
            let x = new Date(startDate);
            let y = new Date(endDate);
            let numberOfDay = Math.abs(y-x);
            let difference = numberOfDay/(1000 * 3600 * 24)
            if(isNaN(difference)){return}
            setTotalDay(difference);
        
        
        
    }, [startDate, endDate])

    const copyToClipBoard = (e) => {
        /* First try but there isn't rich text with it */
        // const text = e.target.parentNode.querySelector("section").textContent;
        // const textToCopy = document.createElement('input');
        // document.body.appendChild(textToCopy);
        // textToCopy.value = text;
        // textToCopy.select();
        // document.execCommand("copy");
        // textToCopy.remove();

        /* Copy rich text with this one */
        const text = e.target.parentNode.querySelector("section").innerHTML

        const listener = (ev) => {
            ev.preventDefault();
            ev.clipboardData.setData("text/html", text);
            ev.clipboardData.setData("text/plain", text);
        };
        document.addEventListener("copy", listener);
        document.execCommand("copy");
        document.removeEventListener("copy", listener);

        // creat a div to alert the person that the element has been copied !
        const tempWindow = document.createElement("div");
        e.target.appendChild(tempWindow);
        tempWindow.className = "tempWindow";
        tempWindow.textContent = "Copied !"
        setTimeout(()=> {
            tempWindow.remove();
        }, 1000)


    }

    





    return (
        <div className="holidayRequest">

            <h2 className="holidayRequest__title">Holiday request generator</h2>

            <div className="holidayRequest__container">

                <div className="form">

                <form action="" method="post">

                    <div className="name form__label">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" name="name" id="name" onChange={fillName}  />
                    </div>

                    <div className="startDate form__label">
                        <label htmlFor="startDate">Enter the starting date</label>
                        <input type="date" name="startDate" id="startDate" onChange={fillStartDate} />
                    </div>

                    <div className="endDate form__label">
                        <label htmlFor="endDate">Enter the end date</label>
                        <input type="date" name="endDate" id="endDate" onChange={fillEndDate} />
                    </div>

                    <div className="BTWDate form__label">
                        <label htmlFor="BTWDate">Enter BTW date</label>
                        <input type="date" name="BTWDate" id="BTWDate" onChange={fillBTW} />
                    </div>





                </form>

            </div>

                <div className="form__view">

                

                <div className="form__view__object">
                <h4>Object</h4>
                <section>

                   Absence request  {name} {startDate}  
                </section>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >Copy to clipboard</button>

                 

                </div>

                

                <div className="form__view__body" >
                <h4>Body</h4>
                <section>
                    Hello, <br />

                I would like to take holiday starting {startDate} until {endDate} , <br />

                which mean a total of {totalDay}  day(s) <br />

                BTW {backToWorkDay.toString()} . <br />

                kind regards,
                </section>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >
                
                Copy to clipboard</button>
                

                </div>

                </div>

            </div>

            
            
        </div>
    );
};

export default HolidayRequest;
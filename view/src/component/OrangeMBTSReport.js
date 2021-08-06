import React, {useEffect, useState} from 'react';

const OrangeMBTSReport = () => {

    const [technicianName, setTechnicianName] = useState("Van Den Ostende Anthony");
    const [reportDate, setReportDate] = useState("--start date--");
    const [endDate, setEndDate] = useState("--end date--")
    const [totalDay, setTotalDay] = useState(0);
    const [backToWorkDay, setBackToWorkDay] = useState("--BTW day--");

    const fillTechnicianName = (e) => {
        setTechnicianName(e.target.value);
    }

    const fillReportDate = (e) => {
        setReportDate(e.target.value);
        
    }

    const fillEndDate = (e) => {
        setEndDate(e.target.value);
    }

    const fillBTW = (e) => {
        setBackToWorkDay(e.target.value);
    }

    // useEffect(() => {
        
    //         let x = new Date(startDate);
    //         let y = new Date(endDate);
    //         let numberOfDay = Math.abs(y-x);
    //         let difference = numberOfDay/(1000 * 3600 * 24)
    //         if(isNaN(difference)){return}
    //         setTotalDay(difference);
        
        
        
    // }, [startDate, endDate])

    const copyToClipBoard = (e) => {
        const text = e.target.parentNode.querySelector("p").innerText;

        const textToCopy = document.createElement('input');
        document.body.appendChild(textToCopy);
        textToCopy.value = text;
        textToCopy.select();
        document.execCommand("copy");
        textToCopy.remove();

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
                        <input type="text" name="name" id="name" onChange={fillTechnicianName} placeholder={technicianName} />
                    </div>

                    <div className="startDate form__label">
                        <label htmlFor="startDate">Enter the report date</label>
                        <input type="date" name="startDate" id="startDate" onChange={fillReportDate} />
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
                <p>

                   
                    


                </p>
                <button 
                className="copy__btn"
                onClick={(e)=>copyToClipBoard(e)}
                >Copy to clipboard</button>

                 

                </div>

                

                <div className="form__view__body" >
                <h4>Body</h4>
                <p>
                    




                </p>
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

export default OrangeMBTSReport;
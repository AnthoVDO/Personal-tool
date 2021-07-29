import React, {useState, useEffect} from 'react';

const HolidayRequest = () => {


    const [name, setName] = useState("Van Den Ostende Anthony");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("")
    const [totalDay, setTotalDay] = useState(0);
    const [backToWorkDay, setBackToWorkDay] = useState("");

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

    





    return (
        <div className="holidayRequest">

            <h2>Holiday request generator</h2>

            <div className="holidayRequest__container">

                <div className="form">

                <form action="" method="post">

                    <div className="name form__label">
                        <label htmlFor="name">Enter your name</label>
                        <input type="text" name="name" id="name" onChange={fillName} placeholder={name} />
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

                <h4>Object</h4>

                <div className="form__view__object">

                Absence request <b> {name} {startDate} </b> 

                </div>

                <h4>Body</h4>

                <div className="form__view__body" >

                Hello, <br />

                I would like to take holiday starting <b>{startDate}</b>  until <b>{endDate}</b> , <br />

                which mean a total of <b>{totalDay}</b>  day(s) <br />

                BTW <b>{backToWorkDay.toString()}</b> . <br />

                kind regards,

                </div>

                </div>

            </div>

            
            
        </div>
    );
};

export default HolidayRequest;
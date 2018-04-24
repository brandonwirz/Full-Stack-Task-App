import React from "react";


export default function Form(props) {
    return (
      <div align="center">
      <img src="add-a-job.png" width="75px" heigth="75px"/>

        <form className="ui form" onSubmit={props.submit}>


            <div className="field">
                   <h3>Add a job</h3>
                   <label>Title</label>

                    <input name="title"
                       value={props.title}
                       onChange={props.change}
                       type="text"
                       label="Due Date"/>
            </div>






                <div>
                    <label>Notes</label>
                   <input className="notes"
                       name="notes"
                       value={props.notes}
                       onChange={props.change}
                       type="text"/>
                </div><br />

               <button className="ui button">Submit</button>
        </form>
        </div>
    )

}

import React from 'react';
import './Contact.css';
import '../../../src/index.css'

export class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: "",
            submitStatus: false
        };
    }

    submitForm(e) {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();

        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS", submitStatus: true });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }

    render() {
        return (
            <div className="Contact">
                <div className="Contact-container" style={{display: this.state.submitStatus ? "none" : "flex"}}>
                    <h1 className="Contact-header">Now that you've met me, I'd love to meet you.</h1>
                    <form 
                    className="Contact-form" 
                    action="https://formspree.io/f/xpzoonnj" 
                    method="POST"
                    onSubmit={this.submitForm}
                    >
                        <label for="Contact-input-name"></label>
                        <input name="name" className="Contact-input" id="Contact-input-name" placeholder="Your name" type="text" required></input>

                        <label for="Contact-input-email"></label>
                        <input name="email" className="Contact-input" id="Contact-input-email" placeholder="Email address" type="email" required></input>

                        <label for="Contact-input-message"></label>
                        <textarea name="Contact-input-message" className="Contact-input" id="Contact-input-message" placeholder="Message" type="text" required></textarea>

                        <label for="Contact-input-submit"></label>
                        <input name="submit" type="submit" id="Contact-input-submit" className="Contact-submit" value={this.state.submitStatus ? "Thank You!" : "Submit"}/>
                    </form>
                    <div className="Contact-icons">
                        <a href="https://github.com/gveldhuis"><svg id="Contact-GitHub" className="Contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg></a>
                        <a className="Contact-icon" href="mailto:veldhuis@umich.edu?subject=Subject&body=Message"><svg id="Contact-email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg></a>
                        <a className="Contact-icon" href="https://www.linkedin.com/in/grant-veldhuis-457205197"><svg id="Contact-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
                        <a className="Contact-icon" href='https://www.instagram.com/grant.veldhuis/?hl=en'><svg id="Contact-insta" xmlns="http://www.w3.org/2000/svg" width="24" height="24" data-name="Layer 1" viewBox="0 0 128 128"><path d="M84,36H44a8,8,0,0,0-8,8V84a8,8,0,0,0,8,8H84a8,8,0,0,0,8-8V44A8,8,0,0,0,84,36ZM64,80A16,16,0,1,1,80,64,16,16,0,0,1,64,80ZM82,51a5,5,0,1,1,5-5A5,5,0,0,1,82,51Z"/><circle cx="64" cy="64" r="8"/><path d="M64,0a64,64,0,1,0,64,64A64,64,0,0,0,64,0Zm36,84a16,16,0,0,1-16,16H44A16,16,0,0,1,28,84V44A16,16,0,0,1,44,28H84a16,16,0,0,1,16,16Z"/></svg></a>
                    </div>
                </div>
                <div className="Contact-submit-message" style={{display: this.state.submitStatus ? "flex" : "none"}}>
                    <div className="Contact-success-icon">Sent!</div>
                    <h1 className="Contact-success-header">Thanks for reaching out.</h1>
                    <h2 className="Contact-success-message">I look forward to connecting!</h2>
                    <div className="Contact-icons">
                        <a href="https://github.com/gveldhuis"><svg id="Contact-GitHub" className="Contact-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2.218 18.616c-.354.069-.468-.149-.468-.336v-1.921c0-.653-.229-1.079-.481-1.296 1.56-.173 3.198-.765 3.198-3.454 0-.765-.273-1.389-.721-1.879.072-.177.312-.889-.069-1.853 0 0-.587-.188-1.923.717-.561-.154-1.159-.231-1.754-.234-.595.003-1.193.08-1.753.235-1.337-.905-1.925-.717-1.925-.717-.379.964-.14 1.676-.067 1.852-.448.49-.722 1.114-.722 1.879 0 2.682 1.634 3.282 3.189 3.459-.2.175-.381.483-.444.936-.4.179-1.413.488-2.037-.582 0 0-.37-.672-1.073-.722 0 0-.683-.009-.048.426 0 0 .46.215.777 1.024 0 0 .405 1.25 2.353.826v1.303c0 .185-.113.402-.462.337-2.782-.925-4.788-3.549-4.788-6.641 0-3.867 3.135-7 7-7s7 3.133 7 7c0 3.091-2.003 5.715-4.782 6.641z"/></svg></a>
                        <a className="Contact-icon" href="mailto:veldhuis@umich.edu?subject=Subject&body=Message"><svg id="Contact-email" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg></a>
                        <a className="Contact-icon" href="https://www.linkedin.com/in/grant-veldhuis-457205197"><svg id="Contact-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg></a>
                    </div>
                </div> 
            </div>
        );
    }
}


function ContactSection() {


    return (
        <section className="ContactSection" id="ContactSection" data-section>
            <div className="ContactSection__Container">
                <div className="ContactSection-Text">
                    <h2 className="Heading2 White">Let’s get started</h2>
                    <p className="Body1 Light-Grey">Now that you know a lot about me, let me know if you are interested to work with me.</p>
                </div>

                <form className="ContactSection-Form">
                    <div className="ContactSection-Form-Name">
                        <label className="Body2 White" htmlFor="Name">Name</label>
                        <input className="Contacts-Form-Input" id="Name" type="text"></input>
                    </div>

                    <div className="ContactSection-Form-Email">
                        <label className="Body2 White" htmlFor="Email">Email</label>
                        <input className="Contacts-Form-Input" id="Email" type="email"></input>
                    </div>

                    <div className="ContactSection-Form-Message">
                        <label className="Body2 White" htmlFor="Message">Message</label>
                        <textarea className="Contacts-Form-Input Message" id="Message"></textarea>
                    </div>

                    <button className="Button White" type="submit">Let’s get started</button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection;
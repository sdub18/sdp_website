from flask import Flask, render_template

application = Flask(__name__)

# route = endpoint
@application.route('/')
def index():
    welcomeTextPython = "Looking for a fun and dynamic place to develop your engineering skills outside of the classroom? Look no further, because UMass Robotics is the perfect place for you! UMass Robotics is a student-run organization that gives members the opportunity to dive deep into the cutting-edge field of robotics. Members will gain experience in computer programming, electronics, and hardware design.  Each year, our team works to build a robot that will compete in an annual competition. This year, the the team will compete in the NASA Lunabotics competition by building a mining robot capable of digging through sand and gathering \"precious material,\" similar to what a robot might do on Mars. Our team is highly committed, and every member is guaranteed to learn valuable skills that can be applied in a workplace environment. UMass Robotics is an amazing place for students of all experience levels, and we hope to see you on the team!"
    return render_template("views/index.html", welcomeTextHTML = welcomeTextPython)
    # don't need "template/" because Flask objeect looks for template folder

@application.route('/MeetTheTeam')
def meet_the_team():
    return render_template("views/meet-the-team.html")

@application.route('/ContactUs')
def contact_us():
    return render_template("views/contact.html")

@application.route('/Competition')
def competition():
    return render_template("views/competition.html")

if __name__ == "__main__":
    application.run(debug=True, threaded=True)
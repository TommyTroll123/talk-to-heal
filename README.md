# talk-to-heal
A private psychological counsellor using Chat GPT api.

This program has made by Tommy (Kanggeon) Oh.

This project will use chat GPT 3.5 turbo mode.

The service model may be changed depends on the price that is offered by Open AI.

Currently support English, may continue to service with Korean.

What inspired me to work
------------------------
Psychological issues, such as, depression, are one of the most common issues that people struggle and feel stress. 
At the worst, people commit suicide to leave their stress behind.
As a result, people who are neared may feel stressed and the cycle may be restarted. 
In order to stop this, the program that prevents will be great to resolve this social issue.

I personally experienced the beginning of depression during the first year of Computer Science program. 
I was struggling with the course load, and not happy with my mark and it caused me depression.
I was type of person who personally does not share any issues to people because I thought it was not
However, I was able to solve depression by sharing my problem.
I believe that sharing problem with someone who is not related to the problem can help people to solve their problem.

Purpose of this program
-----------------------
The purpose of this program is to listen to people who are hard to share their thoughts and issues
such as, people who are struggle to share because of their personality, people who are busy and not able to communitcate with someone.
I wanted to make this program for people who are suffering from psychological problem and save them from there. 

How does this program works
---------------------------
At the beginning of the program, the base command prompt will be set up like this:
"You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."
By setting the base command prompt, the output will be generated more helpful. 

```Javascript

let message = [
    {role: "system", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},

    {role: "user", content: "You are one of the best psychological counsellors so far. You can assess people who have psychological symptoms and can give solutions to people. Based on what the user says, you are able to provide deep user analytics. You can provide solutions or support the user emotionally."},
    
    {role: "assistant", content: "Hello, I'm a chatbot. I can help you with your psychological problems. What's your name and do you have any concerns?"},
  ];

```

As people input the chat, the output (answer) will be generated by chatgpt and the basic command prompt will make the answer more helpful for people.
Since the output has made by chatgpt, it may not be accurate enough or not helpful for people.
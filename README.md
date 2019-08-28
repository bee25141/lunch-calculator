# Lunchbox Chi
There's nothing worse than paying $15.00 for lunch in Chicago and being hungry two hours later. The Lunchbox Chi is an ongoing project to find the best bargain on lunch in the city. Users input the restaurant, meal description, weight, and cost of the meal; the data is stored in an MySQL database and users are returned an analysis of the cost per pound of their meal. Total restaurant averages are displayed with a bar graph built using d3.js, and upon clicking the individual bars users are presented with individual restaurant averages geographically displayed using the Google Maps React API.<br/>
I've been rebuilding the project with new technologies as I learn them. The project is currently a Node.js Express application built with a React front end and hosted on Heroku for deployment; but in the future I'm looking to deploy using AWS EC2, and experiment with serverless architecture using API Gateway and Lambda functions to communicate with a DynamoDB database. Previous iterations included a vanilla javascript application using a Firebase database, which was rebuilt with a Node.js backend and AWS RDS MySQL database and launched on an EC2 instance.

![Lunchbox Chi1](public/assets/images/lunchbox_chi1.png)
![Lunchbox Chi2](public/assets/images/lunchbox_chi2.png)
![Lunchbox Chi3](public/assets/images/lunchbox_chi3.png)


# Deployment
https://lunchboxchi.herokuapp.com/

# Built With
React.js<br/>
Amazon Web Services EC2 and RDS MySQL <br/>
Node.js and Express.js <br/>
d3.js <br/>
Google Maps API <br/>
Bootstrap - The CSS framework used. <br/>
JavaScript <br/>
HTML <br/>

# Authors
Tony Bee
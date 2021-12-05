---
title: 'Serverless REST APIs with GCP'
date: 2021-12-05
category: 'gcp'
draft: false
featuredImage: ../images/proto.png
---

Traditionally, Our application runs on our server and we are responsible for provisioning and managing the resources for it. There are a few issues with this. We are responsible for uptime and maintenance of the server and all its resources. We are also responsible for applying the appropriate security updates to the server. We are charged for keeping the server up even when we are not serving out any requests. As our usage scales we need to manage scaling up our server as well. And as a result manage scaling it down when we don’t have as much usage.

Serverless computing (or serverless for short), is an execution model where the cloud provider (AWS, Azure, or Google Cloud) is responsible for executing a piece of code by dynamically allocating the resources. And only charging for the amount of resources used to run the code. AWS provides AWS Lambda whereas GCP provides Cloud functiond for deploying our serverless functions.



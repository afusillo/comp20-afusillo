Alyssa Fusillo

1. I have correctly implemented all aspects of the work

2. I did not collaborate with anyone

3. I spent 1.5 hours completing this lab

I do not believe that it is possible to request data from a different origin or from
my local machine using XMLHttpRequest.

XMLHttpRequest makes a request to the server and needs a response. If data is requested
from my local machine, the request will not be successful. This is so because XTMLHttpRequest
sends HTTP requests to a web server and then loads the server response data. So, it needs 
to be served by HTTP and cannot just be opened locally.
I cannot request data from a different origin (ex-http://messagehub.herokuapp.com/) due to
the same-origin policy. This prevents content that comes from different origins from interfering with each other. A web browser only permits scripts contained in a first web page to access data in a second web page if both have the same origin, preventing another site from accessing potentially sensitive data.


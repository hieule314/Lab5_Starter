# Lab 5 - Starter

Lab Partner - James Villanueva

1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

    I would not rely on only a unit test for the full "message" feature since sending a message is multilayered, involving (UI, input, network/API calling, backend). End-to-end tests are better for this case.

2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

    I would use a unit test to test the "max message length" feature because it is relatively small (80 characters or fewer). Unit tests are good for checking boundary logic quickly.

# Engineering Skills Assessment

This project contains two challenges - a "Ticket Breakdown" challenge and a "Refactoring" challenge. The two challenges are not related to one another, but both should be completed in the same folder. You can access a starter folder here. Any written answers should be included in markdown files within that folder.


## Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function getShiftsByFacility is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function generateReport is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.


You've been asked to work on a ticket. It reads:

Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.


## Refactoring

This challenge is in JavaScript. Even if it's not your primary language, you should still give it a shot!

You've been asked to refactor the attached function to make it easier to read and understand without changing its functionality. For this task, you should:

- Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it. 
- Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable. 
- Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

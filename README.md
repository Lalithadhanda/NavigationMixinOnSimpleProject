📌 NavigationMixin LWC Project

This project demonstrates the different types of navigation available in Salesforce Lightning using the NavigationMixin module in Lightning Web Components (LWC).
It includes examples for navigating to:

A Record Page

An Object Home/List View

An External Web Page

A Custom Tab (Lightning Component Tab)

The component is exposed on a Lightning App Page for easy testing and UI demonstration.

🚀 Features Included
✔ Navigate to a Record Page

Opens a specific record using standard__recordPage.

✔ Navigate to Object Home / List Page

Opens the default list view for an object using standard__objectPage.

✔ Navigate to External Website

Redirects the user to any external URL using standard__webPage.

✔ Navigate to a Custom Lightning Tab

Opens a custom Lightning Component Tab created for the LWC.

🛠 Technologies Used

Salesforce Lightning Web Components (LWC)

NavigationMixin (lightning/navigation)

Salesforce App Builder

Apex (optional)

Salesforce Setup → Tabs (for custom tab creation)

📁 Project Structure
force-app/
└── main/
    └── default/
        └── lwc/
            └── navigationMixinSample/
                ├── navigationMixinSample.js
                ├── navigationMixinSample.html
                └── navigationMixinSample.js-meta.xml
📄 How to Create a Custom Tab for LWC

To open your component in a Salesforce tab:

Add this to your meta.xml:

<target>lightning__Tab</target>


Go to Setup → Tabs

Under Lightning Component Tabs, click New

Select your LWC

Choose tab style → Save

Add the new tab to your App via App Manager

🧩 Where the Component Is Used

Lightning App Page

Can also be added to Record Pages or Home Pages after adding more targets

📷 Demo Buttons in UI

The component includes four buttons:

Go to Record Page

Go to Object Page

Go to Web Page

Go to Custom Tab

Each demonstrates a different navigation action.

🔧 Prerequisites

Salesforce Developer Org / Sandbox

VS Code with Salesforce Extensions

SFDX CLI

Authorized org (SFDX: Authorize an Org)

📦 Deploying the Component
<img width="1366" height="637" alt="Screenshot (943)" src="https://github.com/user-attachments/assets/8c5e3331-bea8-4618-be05-95b3f3690ba1" />






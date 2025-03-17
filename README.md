
# 📚 Boom-Components Library
The **Boom-Components Library** provides separate, reusable **React components** for building calendar-related functionality in your projects.

---

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/BoomTech-LLC/Calendar-Components
   ```
2. **Navigate to the project directory**:
   ```bash
   cd Calendar-Components
   ```
3. **Install dependencies (use Node.js version 14)**:
   ```bash
   npm install
   ```
   **Note:** Install dependencies both in the root folder and inside the `components` folder.

4. **Start the server**:
   1. Navigate to the `components` folder.
   2. Run the following command:
      ```bash
      npm start
      ```
   The server will be running at: `http://localhost:9123/`

---

## 📋 Usage

To test a component, add it in the `App.js` file and set all properties:

### Example

```jsx
<DateBox
   start="2024-12-04"
   end="2024-12-05"
   eventKind="1"
   eventTimeZone="Asia/Yerevan"
   dateFormat="DD MMMM, YYYY"
   allDay={true}
   showIcons={false}
   type="dateBox"
   dayNumberSize={80}
   wrapperCustomClassNames={["bc-agenda-desc-color", "timebox", "seperateDates"]}
   oneLine={true}
   repeat={{
       type: "",
       advanced: "",
       end: "720",
       interval: "1",
       exclude: [],
       additionalDates: []
   }}
   agenda={true}
   showTimeOnly={true}
   makeDatesCenter={false}
/>
```

---

If you want to change the project's port, modify the `.env` file in the `components` folder.

---

## 📋 Deployment

1. Update the root folder's `package.json` file version from `1.0.0` to `1.0.1`.
2. Update the `components` folder's `package.json` file version from `1.0.0` to `1.0.1`.
3. Navigate to the root folder and run the following command:
   ```bash
   npm run build
   ```
4. After the build process, push the changes to GitHub and merge them with the `master` branch.

**Important Note:** Both `package.json` files must have the same version number.

---

## 📋 Usage in Other Projects

1. If the library is not listed in your `package.json`, install it directly:
   ```bash
   npm i git+https://github.com/BoomTech-LLC/Calendar-Components.git
   ```

2. To update the library, add the following script to your `package.json`:
   ```json
   "scripts": {
       "update:bcc": "npm install git+https://github.com/BoomTech-LLC/Calendar-Components.git"
   }
   ```

   Then run the script:
   ```bash
   npm run update:bcc
   ```

3. Import the required component individually, for example:
   ```javascript
   import AddShareIcons from 'boom-components/dist/AddShareIcons';
   ```

### 🎉 Happy Coding! 😊

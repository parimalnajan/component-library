import React from 'react';
import Codedisplay from '../../site-elements/codeDisplay';

export default function Button(props) {
   const semanticButtons = (
      <div className=" buttons__list">
         <button className="text-sm button-primary">Primary Button</button>
         <button className="text-sm button-secondary">Secondary Button</button>
         <button className="text-sm button-danger">Danger Button</button>
         <button className="text-sm button-warning">Warning Button</button>
      </div>
   );

   const sizedButtons=(
       <div className="buttons__list">
           <button className="text-lg button-primary">Larger Button</button>
           <button className="text button-primary">Large Button</button>
           <button className="text-sm button-primary">Regular Button</button>
           <button className="text-xs button-primary">Small Button</button>
       </div>
   )
   
   const outlineButtons = (
      <div className="buttons__list">
         <button className="text-sm button-primary-outline">Primary Button</button>
         <button className="text-sm button-secondary-outline">Secondary Button</button>
         <button className="text-sm button-danger-outline">Danger Button</button>
         <button className="text-sm button-warning-outline">Warning Button</button>
      </div>
   );

   const blockButtons =(
   <div className="block">
    <button className="text-sm button-primary block__buttons">Primary Button</button>
    <button className="text-sm button-secondary block__buttons">Secondary Button</button>
    </div>
   )

   return (
      <>
         <p className="text-3xl bold">Buttons</p>
         <p className="text light">
            The Button component is used to trigger an action or event, such as
            submitting a form, opening a dialog, canceling an action, or
            performing a delete operation.
         </p>
         <br />
         <p className="text-xl semibold">         
            Buttons with different semantic purposes
         </p>
         <Codedisplay component={semanticButtons} />

         <p className="text-xl semibold">         
            Outline Buttons
         </p>
         <Codedisplay component={outlineButtons} />
    
         <p className="text-xl semibold">         
            Buttons with different sizes
         </p>
         <p className="text light">
            The text-size classes can be used to control button sizes
         </p>
         <Codedisplay component={sizedButtons} />
        
         <p className="text-xl semibold">         
            Block buttons
         </p>
         <p className="text light">
            These buttons occupy the full width of their container 
         </p>
         <Codedisplay component={blockButtons} />
      </>
   );
}

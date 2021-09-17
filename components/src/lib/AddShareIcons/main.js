import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './main.css';
import {
   checkProps,
   downloadSharer,
   openShareUrl,
   openAddToUrl,
   copyLink,
   generateEventUrl,
   DEFAULTS,
} from '../helpers/addShare';
import { isDefined, combineClassNames } from '../helpers/commons';

export default function AddShareIcons(props) {

   const [ copyTooltipText, setCopyTooltipText ] = useState(props.copyActionTooltipText ?? DEFAULTS.copyActionTooltipText);
   
   if(!checkProps(props)) return null

   const addToTypes = [ 'google', 'outlook', 'icalendar', 'yahoo' ];
   const shareTypes = [ 'facebook', 'linkedin', 'twitter', 'copyLink' ];
      
   const showAddToIcons = !isDefined(props.showAddToIcons) || props.showAddToIcons === true;
   const showShareIcons = !isDefined(props.showShareIcons) || props.showShareIcons === true;

   const addIcons = showAddToIcons && addToTypes.map(type => {
      let clickHandler;
      if(type === 'google'  || type === 'yahoo') clickHandler = e => openAddToUrl(e, type, props.event);
      if(type === 'outlook' || type === 'icalendar') clickHandler = e => downloadSharer(e, type, props.event);
      return (
         <span
            key={type} 
            className={ `bmct-add-share-icon bmct-${type}${combineClassNames(props.addToIconsCustomClassNames || [])}` }
            onClick={ clickHandler }
         />
      )
   })


   const eventUrl = generateEventUrl(props.event, true, props.boomEventUrlBase, props.comp_id, props.instance);

   const shareIcons = showShareIcons && shareTypes.map(type => {
      const clickHandler = type === 'copyLink' ? e => copyLink(e, props.event, setCopyTooltipText, props.copiedTooltipText, props.boomEventUrlBase, props.comp_id, props.instance) : e => openShareUrl(e, type, eventUrl);
      return (
         <span
            key={type} 
            className={ `bmct-add-share-icon bmct-${type}${combineClassNames(props.shareIconsCustomClassNames || [])}` }
            onClick={ clickHandler }
            onMouseOut={ () => type === 'copyLink' && setCopyTooltipText(props.copyActionTooltipText ?? DEFAULTS.copyActionTooltipText) }
         >
            {
               type === 'copyLink' &&
               <span className='copy-tooltip'>{copyTooltipText}</span>
            }
         </span>

      )
   })

   return (
      <div className={`bmct-icons-${DEFAULTS.sequence.includes(props.sequence) ? props.sequence : DEFAULTS.sequence[0]}`}>
         {
            showAddToIcons ?
            <div className={`bmct-icons-container${combineClassNames(props.iconsSectionCustomClassNames || [])}`}>
               <div>{ props.addToSectionTitle ?? DEFAULTS.addToSectionTitle }</div>
               <div>{ addIcons }</div>
            </div> :
            null
         }
         {
            showShareIcons ?
            <div className={`bmct-icons-container${combineClassNames(props.iconsSectionCustomClassNames || [])}`}>
               <div>{ props.shareSectionTitle ?? DEFAULTS.shareSectionTitle }</div>
               <div>{ shareIcons }</div>
            </div> :
            null
         }
      </div>
   )
}

AddShareIcons.propTypes = {
   comp_id: PropTypes.string.isRequired,
   instance: PropTypes.string.isRequired,
   event: PropTypes.object.isRequired,
   boomEventUrlBase: PropTypes.string.isRequired,
   iconsSectionCustomClassNames: PropTypes.arrayOf(PropTypes.string),
   showAddToIcons: PropTypes.bool,
   addToSectionTitle: PropTypes.string,
   addToIconsCustomClassNames: PropTypes.arrayOf(PropTypes.string),
   showShareIcons: PropTypes.bool,
   shareSectionTitle: PropTypes.string,
   shareIconsCustomClassNames: PropTypes.arrayOf(PropTypes.string),
   copyActionTooltipText: PropTypes.string,
   copiedTooltipText: PropTypes.string,
   sequence: PropTypes.oneOf(['vertical', 'horizontal'])
}
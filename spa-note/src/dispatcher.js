import {Dispatcher} from 'flux';

const dispatcher = new Dispatcher();

export default dispatcher;
export const dispatcher
= dispatcher.dispatch.bind(dispatcher);
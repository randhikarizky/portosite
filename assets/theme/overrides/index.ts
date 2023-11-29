import { merge } from 'lodash';

import Card from './Card';
import Lists from './Lists';
import Paper from './Paper';
import Input from './Input';
import Button from './Button';
import Tooltip from './Tooltip';
import Backdrop from './Backdrop';
import Typography from './Typography';
import IconButton from './IconButton';
import Icon from './Icon';
import Autocomplete from './Autocomplete';
import Dialog from './Dialog';
import Slider from './Slider';
import Chip from './Chip';
import Avatar from './Avatar';

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme: any) {
  return merge(
    Autocomplete(theme),
    Avatar(theme),
    Backdrop(theme),
    Button(theme),
    Chip(theme),
    Card(theme),
    Dialog(theme),
    Icon(),
    IconButton(theme),
    Input(theme),
    Lists(theme),
    Paper(),
    Slider(theme),
    Tooltip(theme),
    Typography(theme)
  );
}

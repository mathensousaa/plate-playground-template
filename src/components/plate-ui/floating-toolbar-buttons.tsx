import React from 'react';
import {
  BaseBoldPlugin,
  BaseCodePlugin,
  BaseItalicPlugin,
  BaseStrikethroughPlugin,
  BaseUnderlinePlugin,
} from '@udecode/plate-basic-marks';
import { useEditorReadOnly } from '@udecode/plate-common/react';

import { Icons } from '@/components/icons';
import { CommentToolbarButton } from '@/components/plate-ui/comment-toolbar-button';
import { LinkToolbarButton } from '@/components/plate-ui/link-toolbar-button';

import { MarkToolbarButton } from './mark-toolbar-button';
import { MoreDropdownMenu } from './more-dropdown-menu';
import { TurnIntoDropdownMenu } from './turn-into-dropdown-menu';

export function FloatingToolbarButtons() {
  const readOnly = useEditorReadOnly();

  return (
    <>
      {!readOnly && (
        <>
          <TurnIntoDropdownMenu />

          <MarkToolbarButton nodeType={BaseBoldPlugin.key} tooltip="Bold (⌘+B)">
            <Icons.bold />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={BaseItalicPlugin.key}
            tooltip="Italic (⌘+I)"
          >
            <Icons.italic />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={BaseUnderlinePlugin.key}
            tooltip="Underline (⌘+U)"
          >
            <Icons.underline />
          </MarkToolbarButton>
          <MarkToolbarButton
            nodeType={BaseStrikethroughPlugin.key}
            tooltip="Strikethrough (⌘+⇧+M)"
          >
            <Icons.strikethrough />
          </MarkToolbarButton>
          <MarkToolbarButton nodeType={BaseCodePlugin.key} tooltip="Code (⌘+E)">
            <Icons.code />
          </MarkToolbarButton>

          <LinkToolbarButton />
        </>
      )}

      <CommentToolbarButton />

      {!readOnly && <MoreDropdownMenu />}
    </>
  );
}

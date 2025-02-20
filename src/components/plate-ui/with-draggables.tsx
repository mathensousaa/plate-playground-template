import { BlockquotePlugin } from '@udecode/plate-block-quote/react';
import { CodeBlockPlugin } from '@udecode/plate-code-block/react';
import {
  createNodesWithHOC,
  ParagraphPlugin,
} from '@udecode/plate-common/react';
import { withDraggable as withDraggablePrimitive } from '@udecode/plate-dnd';
import { BaseExcalidrawPlugin } from '@udecode/plate-excalidraw';
import { HEADING_KEYS } from '@udecode/plate-heading';
import { BaseColumnPlugin } from '@udecode/plate-layout';
import {
  BulletedListPlugin,
  NumberedListPlugin,
} from '@udecode/plate-list/react';
import {
  BaseImagePlugin,
  BaseMediaEmbedPlugin,
  BasePlaceholderPlugin,
} from '@udecode/plate-media';
import { BaseTablePlugin } from '@udecode/plate-table';
import { BaseTogglePlugin } from '@udecode/plate-toggle';

import { Draggable } from './draggable';

import type { DraggableProps } from './draggable';
import type { FC } from 'react';
import type { WithDraggableOptions } from '@udecode/plate-dnd';

export const withDraggable = (
  Component: FC,
  options?: WithDraggableOptions<
    Partial<Omit<DraggableProps, 'children' | 'editor' | 'element'>>
  >
) =>
  withDraggablePrimitive<DraggableProps>(Draggable, Component, options as any);

export const withDraggablesPrimitive = createNodesWithHOC(withDraggable);

export const withDraggables = (components: any) => {
  return withDraggablesPrimitive(components, [
    {
      keys: [
        ParagraphPlugin.key,
        BulletedListPlugin.key,
        NumberedListPlugin.key,
      ],
      level: 0,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'h-[1.3em]',
          gutterLeft: 'px-0 pb-1 text-[1.875em]',
        },
      },
      key: HEADING_KEYS.h1,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'h-[1.3em]',
          gutterLeft: 'px-0 pb-1 text-[1.5em]',
        },
      },
      key: HEADING_KEYS.h2,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'h-[1.3em]',
          gutterLeft: 'pt-[2px] px-0 pb-1 text-[1.25em]',
        },
      },
      key: HEADING_KEYS.h3,
    },
    {
      draggableProps: {
        classNames: {
          blockToolbarWrapper: 'h-[1.3em]',
          gutterLeft: 'pt-[3px] px-0 pb-0 text-[1.1em]',
        },
      },
      keys: [HEADING_KEYS.h4, HEADING_KEYS.h5],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-[3px] px-0 pb-0',
        },
      },
      keys: [ParagraphPlugin.key],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'px-0 pb-0',
        },
      },
      keys: [HEADING_KEYS.h6, BulletedListPlugin.key, NumberedListPlugin.key],
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'px-0 pb-0',
        },
      },
      key: BlockquotePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-6 px-0 pb-0',
        },
      },
      key: CodeBlockPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-0 px-0 pb-0',
        },
      },
      key: BaseImagePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-0 px-0 pb-0',
        },
      },
      key: BaseMediaEmbedPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-0 px-0 pb-0',
        },
      },
      key: BaseExcalidrawPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-0 px-0 pb-0',
        },
      },
      key: BaseTogglePlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-0 px-0 pb-0',
        },
      },
      key: BaseColumnPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-3 px-0 pb-0',
        },
      },
      key: BasePlaceholderPlugin.key,
    },
    {
      draggableProps: {
        classNames: {
          gutterLeft: 'pt-3 px-0 pb-0',
        },
      },
      key: BaseTablePlugin.key,
    },
  ]);
};

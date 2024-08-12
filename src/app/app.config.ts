import { provideFileRouter } from '@analogjs/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import {
  ContentRenderer,
  MarkdownContentRendererService,
  MarkedSetupService,
  provideContent,
  withHighlighter,
  withMarkdownRenderer,
} from '@analogjs/content';
import { PrismHighlighter } from '@analogjs/content/prism-highlighter';

import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';

export const appConfig: ApplicationConfig = {
  providers: [
    MarkedSetupService,
    provideFileRouter(),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideContent(
      withMarkdownRenderer({
        loadMermaid: () => import('mermaid'),
      }),
      withHighlighter({ useClass: PrismHighlighter })
    ),
    { provide: ContentRenderer, useClass: MarkdownContentRendererService },
  ],
};

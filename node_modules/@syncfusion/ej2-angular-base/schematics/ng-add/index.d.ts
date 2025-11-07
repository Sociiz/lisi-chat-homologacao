import { Rule } from '@angular-devkit/schematics';
import { workspaces } from '@angular-devkit/core';
import { LibOptionsSchema, OptionsSchema } from './schema';
export type WorkspaceDefinition = workspaces.WorkspaceDefinition;
export type ProjectDefinition = workspaces.ProjectDefinition;
export declare function install(options: OptionsSchema, libOptions: LibOptionsSchema): Rule;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.componentBuilder = void 0;
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const helpers_1 = require("../utils/helpers/helpers");
const ts = require("typescript");
const get_project_1 = require("../utils/get-project");
const helpers_2 = require("../utils/helpers/helpers");
const ast_1 = require("../utils/ast");
function componentBuilder(options, sampleDetails) {
    return (host, context) => {
        const workspace = (0, helpers_1.getWorkspace)(host);
        const project = (0, get_project_1.getProjectFromWorkspace)(workspace, options.project);
        options.selector = options.selector || core_1.strings.dasherize(options.name);
        if (options.path === undefined) {
            options.path = `/${project.root}/src/app/`;
        }
        const parsedPath = (0, helpers_2.parseName)(options.path, options.name);
        options.name = parsedPath.name;
        options.path = parsedPath.path;
        (0, helpers_2.validateName)(options.name);
        (0, helpers_2.validateHtmlSelector)(options.selector);
        options.selector = options.selector || buildSelector(options, project.prefix);
        options.module = (0, helpers_2.findModuleFromOptions)(host, options);
        const templateSource = (0, schematics_1.apply)((0, schematics_1.url)('./samples'), [
            (0, schematics_1.template)(Object.assign(Object.assign(Object.assign({}, core_1.strings), { 'if-flat': (s) => options.flat ? '' : s }), options)),
            (0, schematics_1.move)(null, parsedPath.path)
        ]);
        const parsedImagePath = (0, helpers_2.parseName)(`/${project.root}/src/assets/${sampleDetails.componentName}`, `${sampleDetails.sampleName}`);
        let imagesExists = host.getDir(`${parsedImagePath.path}/${parsedImagePath.name}`).subfiles.length ?
            true : false, optionsClone = Object.assign({}, options), copyImages;
        optionsClone.path = parsedImagePath.path;
        optionsClone.name = parsedImagePath.name;
        if (!imagesExists)
            copyImages = (0, schematics_1.apply)((0, schematics_1.url)('./images'), [
                (0, schematics_1.template)(Object.assign({}, core_1.strings, optionsClone)),
                (0, schematics_1.move)(null, parsedImagePath.path)
            ]);
        return (0, schematics_1.chain)([
            (0, schematics_1.branchAndMerge)((0, schematics_1.chain)([
                addModuleToRoot(options, sampleDetails),
                (0, schematics_1.mergeWith)(templateSource),
                imagesExists ? (0, schematics_1.noop)() : (0, schematics_1.mergeWith)(copyImages),
            ]))
        ])(host, context);
    };
}
exports.componentBuilder = componentBuilder;
function buildSelector(options, projectPrefix) {
    let selector = core_1.strings.dasherize(options.name);
    if (options.prefix) {
        selector = `${options.prefix}-${selector}`;
    }
    else if (options.prefix === undefined && projectPrefix) {
        selector = `${projectPrefix}-${selector}`;
    }
    return selector;
}
function readIntoSourceFile(host, modulePath) {
    const text = host.read(modulePath);
    if (text === null) {
        throw new schematics_1.SchematicsException(`File ${modulePath} does not exist.`);
    }
    const sourceText = text.toString('utf-8');
    return ts.createSourceFile(modulePath, sourceText, ts.ScriptTarget.Latest, true);
}
function addModuleToRoot(options, sampleDetails) {
    return (host) => {
        const modulePath = options.module;
        let source = readIntoSourceFile(host, modulePath);
        const componentPath = `/${options.path}/`
            + (options.flat ? '' : core_1.strings.dasherize(options.name) + '/')
            + core_1.strings.dasherize(options.name)
            + '.component';
        const relativePath = (0, helpers_2.buildRelativePath)(modulePath, componentPath);
        const classifiedName = core_1.strings.classify(`${options.name}Component`);
        const declarationChanges = (0, helpers_2.addDeclarationToModule)(source, modulePath, classifiedName, relativePath);
        const declarationRecorder = host.beginUpdate(modulePath);
        for (const change of declarationChanges) {
            if (change instanceof helpers_2.InsertChange) {
                declarationRecorder.insertLeft(change.pos, change.toAdd);
            }
        }
        host.commitUpdate(declarationRecorder);
        (0, ast_1.addModuleImportToModule)(host, modulePath, sampleDetails.libModules, sampleDetails.packageName);
        const providers = sampleDetails.diModules ? sampleDetails.diModules.split(',') : null;
        if (providers)
            providers.forEach((provider) => {
                if (!(0, helpers_2.isImported)(source, provider.trim(), sampleDetails.packageName)) {
                    source = readIntoSourceFile(host, modulePath);
                    const providerChanges = (0, helpers_2.addProviderToModule)(source, modulePath, provider, sampleDetails.packageName);
                    const providerRecorder = host.beginUpdate(modulePath);
                    for (const change of providerChanges) {
                        if (change instanceof helpers_2.InsertChange) {
                            providerRecorder.insertLeft(change.pos, change.toAdd);
                        }
                    }
                    host.commitUpdate(providerRecorder);
                }
            });
        return host;
    };
}

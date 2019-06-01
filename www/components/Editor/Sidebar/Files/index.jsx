import * as React from 'react';
import { getModulePath } from '@codesandbox/common/lib/sandbox/modules';

import DirectoryEntry from './DirectoryEntry/index';
import EditIcons from './DirectoryEntry/Entry/EditIcons';

class Files extends React.Component {
  createModule = () => {
    // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
    this._createModule();
  };

  createDirectory = () => {
    // INCREDIBLY BAD PRACTICE! TODO: FIX THIS
    this._createDirectory();
  };

  getModulePath = (moduleId: string) => {
    try {
      const sandbox = this.props.store.editor.currentSandbox;
      return getModulePath(sandbox.modules, sandbox.directories, moduleId);
    } catch (e) {
      return '';
    }
  };

  render() {
    return (
      <DirectoryEntry
        root
        title={project.title || 'Project'}
        // initializeProperties={({
        //   onCreateFileClick,
        //   onCreateDirectoryClick,
        // }) => {
        //   this._createModule = onCreateFileClick;
        //   this._createDirectory = onCreateDirectoryClick;

        //   if (this.props.setEditActions) {
        //     this.props.setEditActions(
        //       <EditIcons
        //         hovering
        //         forceShow={window.__isTouch}
        //         onCreateFile={this.createModule}
        //         onCreateDirectory={this.createDirectory}
        //         onDownload={this.onDownload}
        //         onUploadFile={
        //           store.isLoggedIn && sandbox.privacy === 0
        //             ? this.uploadFile
        //             : undefined
        //         }
        //       />
        //     );
        //   }
        // }}
        depth={-1}
        id={null}
        shortid={null}
      />
    );
  }
}

export default Files;

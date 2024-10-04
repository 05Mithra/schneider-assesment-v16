import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = '';
  hwMappingFile!: File;
  sitePendingFile!: File;
  inputTableFile!: File;

  logs = [
    { type: 'info', message: 'Upload started for HW Mapping File.' },
    { type: 'error', message: 'Error processing Site Pending File.' },
    { type: 'info', message: 'Upload started for HW Mapping File.' },
    { type: 'error', message: 'Error processing HW Mapping File.' },
    { type: 'info', message: 'Upload started for Input Table File.' },
    { type: 'error', message: 'Error processing Site Pending File.' },
  ];
  filteredLogs = this.logs;

  onFileSelect(event: Event, type: string) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      if (type === 'hwMappingFile') {
        this.hwMappingFile = file;
      } else if (type === 'sitePendingFile') {
        this.sitePendingFile = file;
      } else if (type === 'inputTableFile') {
        this.inputTableFile = file;
      }
      console.log(type + ' File ', file);
    }
  }

  onUpload(fileType: string) {
    console.log(`${fileType} uploaded `);
    // Handle the file upload logic here
  }

  generateXRef() {
    console.log('Generate XRef');
    // Logic to generate X-Ref
  }

  runProcess() {
    console.log('Run Process');
    // Logic to run process
  }

  allFilesUploaded() {
    return this.hwMappingFile && this.sitePendingFile && this.inputTableFile;
  }

  checkStatus() {
    console.log('Check Status');
    // Logic for checking status
  }

  filterLogs(logType: string) {
    if (logType === 'all') {
      this.filteredLogs = this.logs;
    } else {
      this.filteredLogs = this.logs.filter((log) => log.type === logType);
    }
  }
}

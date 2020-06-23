string filename = '';

string projectName = '';
List<string> httpWwwAbbyyComFlexicapture = new List<String>();
httpWwwAbbyyComFlexicapture.FlexiCaptureWebServiceSoap service = new httpWwwAbbyyComFlexicapture.FlexiCaptureWebServiceSoap();
service.inputHttpHeaders_x = new Map<String, String>();
service.inputHttpHeaders_x.put('Authorization', 'Basic TkNGMVxcVk1BZG1pbjpOQ0YhIVZNQWRtMW4');
httpWwwAbbyyComFlexicapture.UserIdentity username = service.GetCurrentUserIdentity();
system.debug('GetCurrentUserIdentity ---- username=='+username);
httpWwwAbbyyComFlexicapture.UserList users= service.GetUsers();
system.debug('GetUsers ---- users=='+users);
integer userId = service.FindUser(username.Name);
system.debug('---- username.Name=='+username.Name);
system.debug('userId ---- FindUser=='+userId);
integer roleType = 11;
 //The operator role on the user's station           
 integer stationType = 10;
 //The user’s station          
 integer sessionId = service.OpenSession(roleType, stationType);
            system.debug('OpenSession ---- sessionId=='+sessionId);
            httpWwwAbbyyComFlexicapture.projects_element projects = service.GetProjects();
system.debug('GetProjects ---- projects=='+projects);
string projectGuid = '';
integer projId = 1;
if (projects != null && projects.Project!= null && projects.Project.size() > 0){system.debug('GetProjects ---- projects.Project=='+projects.Project);
}   for(httpWwwAbbyyComFlexicapture.Project project:projects.Project){                system.debug('projectName ---- projectName=='+projectName);
                system.debug('GetProjects ---- project.Name=='+project.Name);
                system.debug('GetProjects ---- project.Guid=='+project.Guid);
                if(project.Name != projectName){                    system.debug('projectName ---- projectName=='+projectName);
                    system.debug('GetProjects ---- project.Name=='+project.Name);
                    continue;
                }             
				projectGuid = project.Guid;
       			projId = project.Id;
                system.debug('projectGuid ---- =='+projectGuid);
                break;
            }system.debug('Final projectGuid ---- =='+projectGuid +'-->' + projId);
integer projectId = service.OpenProject(sessionId, projectGuid);
        system.debug('OpenProject ---- projectId=='+projectId);
httpWwwAbbyyComFlexicapture.Batch b =new httpWwwAbbyyComFlexicapture.Batch();
//httpWwwAbbyyComFlexicapture.Batch batch = new Batch();
		b.Id=100;
        b.Name='TestBG';
        b.ProjectId  = projectId;
        b.BatchTypeId= 4;
        b.Priority =0;
        b.Description='TESTDe';
        b.HasAttachments = false;
        //public httpWwwAbbyyComFlexicapture.Properties_element Properties;
		Long d =132131788040000000L;
        b.CreationDate = d ;
        b.DocumentsCount = 0;
        b.PagesCount= 0;
        b.RecognizedSymbolsCount = 0;
        b.VerificationSymbolsCount = 0;
        b.UncertainSymbolsCount = 0;
        b.AssembledDocumentsCount = 0;
        b.RecognizedDocumentsCount = 0;
        b.VerifiedDocumentsCount = 0;
        b.ExportedDocumentsCount = 0;
        b.StageExternalId = 500;
        b.ErrorText='err';
        b.OwnerId = userId;
        b.CreatorId = userId;
        b.SLAStartDate = d;
        b.SLAExpirationDate = d;
        b.ElapsedProcessingSeconds = 0;
List<httpWwwAbbyyComFlexicapture.RegistrationProperty> rpList = new List<httpWwwAbbyyComFlexicapture.RegistrationProperty>();
httpWwwAbbyyComFlexicapture.RegistrationProperty rp =new httpWwwAbbyyComFlexicapture.RegistrationProperty();
rp.Name ='reg';
rp.value ='reg';
rpList.add(rp);
httpWwwAbbyyComFlexicapture.Properties_element p = new httpWwwAbbyyComFlexicapture.Properties_element();
p.RegistrationProperty = rpList;
		b.Properties = p;
        system.debug('+++Batch+++'+b);
        system.debug('+++add new batch +++'+sessionId+'---'+projectId+'---'+b+'----'+userId);
integer batchId = service.AddNewBatch(sessionId, projectId,b, userId);
        system.debug('AddNewBatch ---- batchId=='+batchId);

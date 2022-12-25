export enum API_VERSION {
  V1 = 'api/v1',
}

export const API_PATHS = {
  [API_VERSION.V1]: {
    CHANGE_FEATURE_FLAG_ENTRYPOINT: {
      PATH: `${API_VERSION.V1}/features/:featureId/change-flag`,
      PARAMS: {
        FEATURE_ID: 'featureId',
      },
    },
    CREATE_FEATURE_ENTRYPOINT: {
      PATH: `${API_VERSION.V1}/features`,
    },
    CREATE_PROJECT_ENTRYPOINT: {
      PATH: `${API_VERSION.V1}/projects`,
    },
    RETRIEVE_FEATURES_BY_PROJECT_ENTRYPOINT: {
      PATH: `${API_VERSION.V1}/projects/:projectId/features`,
      PARAMS: {
        PROJECT_ID: 'projectId',
      },
    },
    RETRIEVE_PROJECTS_ENTRYPOINT: {
      PATH: `${API_VERSION.V1}/projects`,
    },
  },
};



USAGE!

In composer.json:
{
    "repositories": [       
        {
            "type": "vcs",
            "url": "ssh://mike@ai-em.net/var/git/govukft_bundle.git"
        },
        {
            "type": "composer",
            "url": "https://govuk-frontend-toolkit.appspot.com"
        }
    ],
    "require": {
        "alphagov/govuk_frontend_toolkit": "dev-master",
        "ukhomeoffice/govukftbundle": "dev-master"
    }
}


In app/AppKernel.php:
Add to bundle => "new UKHomeOffice\Bundle\GovUKFTBundle\GovUKFTBundle()"


Add route resource to app/config/routing.yml (for testing purposes):
govukft:
    resource: "@GovUKFTBundle/Resources/config/routing.yml"
    prefix:   /govukft


Add bundle to assetic bundle list in config.yml:
# Assetic Configuration
assetic:
    bundles:        [ GovUKFTBundle ]


Add the bundle config service to the imports section of
app/config/config.yml:
- { resource: "@GovUKFTBundle/Resources/config/services.yml" }


Enable translations by uncommenting the following line
in the main app/config/config.yml:
   translator:      { fallback: "%locale%" }



**WORK IN PROGRESS!**

UKHomeOffice/Bundle/GovUKFTBundle
---------------------------------

Make use of the Gov UK frontend toolkit with your Symfony 2 project. See
[github.com/alphagov/govuk_frontend_toolkit](https://github.com/alphagov/govuk_frontend_toolkit).


**Setup...**

**In composer.json**

    {
        "repositories": [       
            {
                "type": "vcs",
                "url": "https://github.com/mikejw/GovUKFTBundle.git"
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

**Add extra options to config block in composer.json**

    "config": {        
        "component-dir": "web/components",
        "component-baseurl": "/components"
    }


**Run composer update**

    composer update


**In app/AppKernel.php add the bundle**

    $bundles = array(

        # ...
        new UKHomeOffice\Bundle\GovUKFTBundle\GovUKFTBundle()
    );


**Add route resource to app/config/routing.yml (for testing)**

    gov_ukft:
        resource: "@GovUKFTBundle/Resources/config/routing.yml"
        prefix:   /govukft


**Add the bundle extension config to app/config/config.yml**

    gov_ukft:
        enabled: true
        title: Foo
        theme: global

**Add bundle to assetic bundle list in app/config/config.yml**

    # Assetic Configuration
    assetic:
        bundles:        [ GovUKFTBundle ]


**Install sass ruby gem and add sass config to app/config/config.yml**

    assetic:
        filters:
            sass:
                bin: /usr/local/bin/sass


Test the theme at http://.../app_dev.php/govukft/testing


<!--
Enable translations by uncommenting in app/config/config.yml
------------------------------------------------------------

    translator:      { fallback: "%locale%" }
-->